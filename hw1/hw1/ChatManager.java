package hw1;

import java.util.ArrayList;

public class ChatManager
{
	private ChatManager() {}
	private static final ChatManager cm = new ChatManager();
	
	public static ChatManager getChatManger()
	{
		return cm;
	}
	
	ArrayList<ChatSocket> list = new ArrayList<ChatSocket>();
	
	public void add(ChatSocket cs)
	{
		list.add(cs);
	}
	
	public void publish(ChatSocket cs, String mess)
	{
		for(int i=0; i<list.size(); i++)
		{
			ChatSocket csChat = list.get(i);
			if(!cs.equals(csChat))
			{
				csChat.out(mess);
			}
		}
	}
}
