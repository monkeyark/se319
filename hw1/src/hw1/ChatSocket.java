package hw1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.Socket;

public class ChatSocket extends Thread
{
	Socket socket;
	
	public ChatSocket(Socket s)
	{
		socket = s;
	}
	
	public void out(String out)
	{
		try
		{
			socket.getOutputStream().write(out.getBytes("UTF-8"));
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void run()
	{
		try
		{
			InputStreamReader in = new InputStreamReader(socket.getInputStream(), "UTF-8");
			BufferedReader br = new BufferedReader(in);
			String line = br.readLine();
			while(line != null)
			{
				ChatManager.getChatManger().publish(this, line);
				br.close();
			}
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
}
