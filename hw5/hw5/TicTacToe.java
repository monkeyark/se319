package hw5;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseButton;
import javafx.scene.layout.Pane;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.stage.Stage;

public class TicTacToe extends Application
{
	enum State
	{
		X, O;
		
		State toggle()
		{
			if (this.equals(X))
				return O;
			else
				return X;
		}
	};
	
	State nextState = State.X;
	private Tile board[][] = new Tile[3][3];
	boolean playable = true;

	private Pane root = new Pane();
	Label label = new Label("");
	Button restart = new Button("New Game");
	private String img_o = "o.jpg";
	private String img_x = "x.jpg";

	private Parent createContent()
	{
		root.setPrefSize(900, 600);

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
		
		label = new Label(nextState + " Turn");
		label.setFont(new Font("Arial", 30));
		label.setLayoutX(650);
		label.setLayoutY(300);
		
		restart.setLayoutX(650);
		restart.setLayoutY(200);
		
		root.getChildren().addAll(label, restart);
		
		return root;
	}

	private class Tile extends StackPane
	{
		private State state = null;

		public Tile()
		{
			Rectangle border = new Rectangle(200, 200);
			border.setFill(null);
			border.setStroke(Color.BLACK);

			setAlignment(Pos.CENTER);
			getChildren().addAll(border);

			setOnMouseClicked(event ->
			{
				if (!playable) return;
				
				if (event.getButton() == MouseButton.PRIMARY)
				{
					if (nextState == State.X)
					{
						show_X();
						state = State.X;
						nextState = State.O;
						label.setText(nextState + " Turn");
						checkGame();
						return;
					}
					else
					{
						show_O();
						state = State.O;
						nextState = State.X;
						label.setText(nextState + " Turn");
						checkGame();
						return;
					}
				}
			});
		}

		public State getState()
		{
			return state;
		}

		private void show_X()
		{
			ImageView img = new ImageView(img_x);
			img.setFitHeight(199);
			img.setFitWidth(199);
			getChildren().addAll(img);
		}

		private void show_O()
		{
			ImageView img = new ImageView(img_o);
			img.setFitHeight(199);
			img.setFitWidth(199);
			getChildren().addAll(img);
		}
	}
	
	private boolean isWin()
	{
		for (int i = 0; i < 3; i++)
		{
			if (board[0][i].getState() == board[1][i].getState() &&
				board[0][i].getState() == board[2][i].getState() &&
				board[0][i].getState() != null)
			{
				return true;//vertical
			}
			if (board[i][0].getState() == board[i][1].getState() &&
				board[i][0].getState() == board[i][2].getState() &&
				board[i][0].getState() != null)
			{
				return true;//horizontal
			}
		}
		
		if (board[0][0].getState() == board[1][1].getState() &&
			board[0][0].getState() == board[2][2].getState() &&
			board[0][0].getState() != null)
		{
			return true;//diagonal
		}
		if (board[2][0].getState() == board[1][1].getState() &&
			board[2][0].getState() == board[0][2].getState() &&
			board[2][0].getState() != null)
		{
			return true;//diagonal
		}
		
		return false;
	}
	
	private boolean isDraw()
	{
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (board[x][y].getState() == null)
				{
					return false;
				}
			}
		}
		return true;
	}
	
	private void checkGame()
	{
		if (isWin())
		{
			playable = false;
			label.setText("Congratulations\n" + nextState.toggle() + "\nwin the game\n");
		}
		else if (isDraw())
		{
			playable = false;
			label.setText("Draw");
		}
	}
	
	private void startGame(Stage primaryStage)
	{
	    restart.setOnAction(__ ->
	    {
	      primaryStage.close();
	      Platform.runLater(() -> new TicTacToe().start(new Stage()));
	    });
	    
		primaryStage.setTitle("Tic Tac Toe");
		primaryStage.setScene(new Scene(createContent()));
		primaryStage.show();
	}
	
	@Override
	public void start(Stage primaryStage)
	{
		startGame(primaryStage);
	}

	public static void main(String[] args)
	{
		launch(args);
	}
}