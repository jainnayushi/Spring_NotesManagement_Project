package com.ayushi.Listener;

import com.ayushi.Components.Notes;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.util.ArrayList;
import java.util.List;

public class MyListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("Context Created");
        List<Notes> list = new ArrayList<Notes>();
        ServletContext context = sce.getServletContext();
        context.setAttribute("list", list);
    }
}
