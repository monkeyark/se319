package hw1;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Client
{
	Socket serverSocket;
	String serverHostname;
	int serverPort;
	ServerIO s_io;
	
	Client(String hostname, int port)
	{
		try
		{
			serverHostname = hostname;
			serverPort = port;
			
			serverSocket = new Socket(hostname, port);
		} catch (UnknownHostException e)
		{
			System.out.println("CLIENT SIDE: client excpetion");
			e.printStackTrace();
		} catch (IOException e)
		{
			e.printStackTrace();
		}
		
		s_io = new ServerIO(this, serverSocket);
		Thread t = new Thread(s_io);
		t.start();
		
	}
	
	public void main(String[] args)
	{
		Client client = new Client("localHost", 5555);
	}
}

class ServerIO implements Runnable
{
	Client c;
	Socket s;
	
	ServerIO(Client client, Socket socket)
	{
		c = client;
		s = socket;
	}

	@Override
	public void run()
	{
		try
		{
			Scanner in;
			PrintWriter out;
			BufferedInputStream input = new BufferedInputStream(s.getInputStream());
			BufferedOutputStream output = new BufferedOutputStream(s.getOutputStream());
			in = new Scanner(input);
			out = new PrintWriter(output);
			
			out.flush();
			
			//handle the inputStream and send the input to another client
			
		} catch (Exception e)
		{
			System.out.println("CLIENT SIDE: SERVERIO excpetion");
		}
	}
}