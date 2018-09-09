package hw1;


import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;

public class Server
{
	public static void main(String[] args) throws IOException
	{
		ServerSocket serverSocket = null;
		int clientNum = 0;
		
		try
		{
			serverSocket = new ServerSocket(5555);
		} catch (IOException e)
		{
			System.out.println("Could not listen on port: 5555");
			System.exit(-1);
		}	
		
		while(true)
		{
			Socket clientSocket = null;
			
			try
			{
				clientSocket = serverSocket.accept();
				
				ClientIO c = new ClientIO(clientSocket, clientNum++);
				Thread t = new Thread(c);
				t.start();
				
			} catch (Exception e)
			{
				System.out.println("SERVER SIDE: clientSocket excpetion");
				System.exit(-1);
			}
		}
	}
}

class ClientIO implements Runnable
{
	Socket s;
	int num;
	
	ClientIO(Socket s, int num)
	{
		this.s = s;
		this.num = num;
	}
	
	@Override
	public void run()
	{
		Scanner in;
		PrintWriter out;
		
		try
		{
			BufferedInputStream input = new BufferedInputStream(s.getInputStream());
			BufferedOutputStream output = new BufferedOutputStream(s.getOutputStream());
			in = new Scanner(input);
			out = new PrintWriter(output);
			
			out.println("You are client " + num);
			out.flush();
			
			//handle the inputStream and send the input to another client
			
		} catch (IOException e)
		{
			System.out.println("SERVER SIDE: ClientIO Exception");
		}
		
		
	}
}