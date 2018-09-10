package hw1;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;


public class Client
{
	public Client()
	{
		try
		{
			Socket serverSocket = new Socket("localhost", 4040);
			
			DataOutputStream outStream = new DataOutputStream(serverSocket.getOutputStream());
			System.out.print("Enter Username:  ");
			
			BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
			
			ClientIO c_io = new ClientIO(serverSocket);
			Thread t = new Thread(c_io);
			t.start();
			
			while(true)
			{
				String output = read.readLine();
				outStream.writeUTF(output);
				outStream.flush();
			}
			
		} catch (IOException e)
		{
			e.printStackTrace();
			System.out.println("Client SIDE: Client Exception");
		}
	}

	public static void main(String[] args)
	{
		new Client();
	}
}

class ClientIO implements Runnable
{
	Socket socket;

	public ClientIO(Socket s)
	{
		socket = s;
	}

	@Override
	public void run()
	{
		DataInputStream input;
		try
		{
			input = new DataInputStream(socket.getInputStream());
			while (true)
			{
				String inStr = null;
				inStr = input.readUTF();
				
				if(!inStr.equals(null) && !inStr.equals(""))
				{
					System.out.println(inStr);
				}
			}
		} catch (IOException e)
		{
			e.printStackTrace();
			System.out.println("Client SIDE: ClientIO Exception");
		}
	}
}
