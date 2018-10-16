package hw1;

import java.net.ServerSocket;
import java.net.Socket;

public class ServerListen extends Thread
{
	@Override
	public void run()
	{
		try
		{
			ServerSocket serverSocket = new ServerSocket(12345);
			
			while(true)
			{
				Socket socket = serverSocket.accept();
				new ChatSocket(socket).start();
			}
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args)
	{
		new ServerListen().start();
	}
}
 