package hw5;

import java.util.ArrayList;

import javafx.animation.KeyFrame;
import javafx.animation.KeyValue;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
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
import javafx.scene.shape.Line;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.util.Duration;

public class TicTacToe extends Application
{
	private Tile board[][] = new Tile[3][3];
	private ArrayList<Combo> combos = new ArrayList<>();

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
	boolean playable = true;
	
	private Pane root = new Pane();

	private String img_o = "o.jpg";
	private String img_x = "x.jpg";
	Label label = new Label("");
	Button restart = new Button("New Game");

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

		for (int i = 0; i < 3; i++)
		{
			combos.add(new Combo(board[0][i], board[1][i], board[2][i]));// vertical
			combos.add(new Combo(board[i][0], board[i][1], board[i][2]));// horizontal
		}
		// diagonals
		combos.add(new Combo(board[0][0], board[1][1], board[2][2]));
		combos.add(new Combo(board[2][0], board[1][1], board[0][2]));
		
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
		State state = null;

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
		
		public double getCenterX()
		{
			return getTranslateX() + 100;
		}

		public double getCenterY()
		{
			return getTranslateY() + 100;
		}
	}

	private class Combo
	{
		private Tile[] tiles;

		public Combo(Tile... tiles)
		{
			this.tiles = tiles;
		}

		public boolean isComplete()//TODO
		{
			if (tiles[0].getState() != State.O && tiles[0].getState() != State.X)
				return false;

			return tiles[0].getState().equals(tiles[1].getState())
				&& tiles[0].getState().equals(tiles[2].getState());
		}
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
	
	private void win(Combo combo)
	{
		playable = false;
		Line line = new Line();
		line.setStartX(combo.tiles[0].getCenterX());
		line.setStartY(combo.tiles[0].getCenterY());
		line.setEndX(combo.tiles[0].getCenterX());
		line.setEndY(combo.tiles[0].getCenterY());
		line.setStrokeWidth(10);
		root.getChildren().add(line);

		Timeline timeline = new Timeline();
		timeline.getKeyFrames().add
		(
			new KeyFrame(Duration.seconds(1),
			new KeyValue(line.endXProperty(), combo.tiles[2].getCenterX()),
			new KeyValue(line.endYProperty(), combo.tiles[2].getCenterY()))
		);
		timeline.play();
		label.setText("Congratulations\n" + nextState.toggle() + "\nwin the game\n");
	}
	
	private void checkGame()
	{
		if (!isDraw())
		{
			for (Combo combo : combos)
			{
				if (combo.isComplete())
				{
					playable = false;
					win(combo);
					return;
				}
			}
		}
		else
		{
			playable = false;
			label.setText("draw");
		}
	}
	
	private void cleanGame(Stage primaryStage)
	{
		primaryStage.close();
	}
	
	private void restartGame(Stage primaryStage)
	{
		cleanGame(primaryStage);
		startGame(primaryStage);
	}
	
	private void startGame(Stage primaryStage)
	{
		primaryStage.setTitle("Tic Tac Toe");
		primaryStage.setScene(new Scene(createContent()));
		primaryStage.show();
		
		restart.setOnAction(new EventHandler<ActionEvent>()
		{
			@Override
			public void handle(ActionEvent event)
			{
				restartGame(primaryStage);
			}
		});
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