package tictactoe;

import javafx.application.Application;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;


public class TicTacToe extends Application
{
	private Tile board[][] = new Tile[3][3];
	private Pane root = new Pane();
	
	private Parent createContent()
	{
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
		
		return root;
	}
	
	
	@Override
	public void start(Stage primaryStage)
	{
		try
		{
			primaryStage.setScene(new Scene(createContent()));
			primaryStage.show();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	private class Tile extends StackPane
	{
		
	}
	
	public static void main(String[] args)
	{
		launch(args);
	}
}