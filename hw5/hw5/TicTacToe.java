package hw5;

import java.util.ArrayList;
import java.util.List;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.layout.Pane;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.stage.Stage;


public class TicTacToe extends Application
{
	private Tile board[][] = new Tile[3][3];
	private List<Combo> combos = new ArrayList<>();
	
	enum State {EMPTY, CROSS, NOUGHT};
	boolean turn_cross = true;
	boolean playable = true;
	
	private Image img_o = new Image("file:hw5/o.jpg");
	private Image img_x = new Image("file:hw5/x.jpg");
	
	private Parent createContent()
	{
		Pane root = new Pane();
		root.setPrefSize(600, 600);
		
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				Tile tile = new Tile();
				tile.setTranslateX(x * 200);
				tile.setTranslateY(y * 200);
				
				root.getChildren().add(tile);
				board[x][y] = tile;
			}
		}
		
		for (int i = 0; i < 3; i++)
		{
			
			combos.add(new Combo(board[0][i], board[1][i], board[2][i]));//horizontal
			combos.add(new Combo(board[i][0], board[i][1], board[i][2]));//vertical
		}
		//diagonals
		combos.add(new Combo(board[0][0], board[1][1], board[2][2]));
		combos.add(new Combo(board[2][0], board[1][1], board[0][2]));
		
		return root;
	}
	
	private class Tile extends StackPane
	{
		String path = "o.jpg";
		State state = State.EMPTY;
		public Tile()
		{
			Rectangle border = new Rectangle(200, 200);
			border.setFill(null);
			border.setStroke(Color.BLACK);

			setAlignment(Pos.CENTER);
			getChildren().addAll(border);//TODO

			ImageView img = new ImageView(path);
			img.setFitHeight(200);
			img.setFitWidth(200);
			getChildren().addAll(img);
			
			setOnMouseClicked(event ->
			{
				if (!playable) return;

				if (event.getButton() == MouseButton.PRIMARY)
				{
					if (!turn_cross) return;

					show_x();
					turn_cross = false;
					checkState();
				}
				else if (event.getButton() == MouseButton.SECONDARY)
				{
					if (turn_cross) return;

					show_o();
					turn_cross = true;
					checkState();
				}
			});
		}
		
		public State getValue()
		{
			return state;//TODO
		}
		
		private void show_x()
		{
			state = State.CROSS;
			//text.setText("X");//TODO
		}

		private void show_o()
		{
			state = State.NOUGHT;
			//text.setText("O");//TODO
		}
	}
	
	private class Combo
	{
		private Tile[] tiles;

		public Combo(Tile... tiles)
		{
			this.tiles = tiles;
		}

		public boolean isComplete()
		{
			if (tiles[0].getValue() == State.EMPTY)
				return false;

			return tiles[0].getValue().equals(tiles[1].getValue()) && tiles[0].getValue().equals(tiles[2].getValue());
		}
	}
	
	private void checkState()
	{
		for (Combo combo : combos)
		{
			if (combo.isComplete())
			{
				playable = false;
				//TODO show win animation
				break;
			}
		}
	}
	
	@Override
	public void start(Stage primaryStage)
	{
		primaryStage.setTitle("Tic Tac Toe");
		primaryStage.setScene(new Scene(createContent()));
		primaryStage.show();
	}
	
	public static void main(String[] args)
	{
		launch(args);
	}
}