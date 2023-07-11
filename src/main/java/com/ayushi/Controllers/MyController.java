package com.ayushi.Controllers;

import com.ayushi.Components.Notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletContext;
import java.util.Date;
import java.util.List;

@Controller
public class MyController {

    @Autowired
    ServletContext context;
    @RequestMapping("/home")
    public String home(Model model){
//      Add data from controller to view
        String page = "view";
        model.addAttribute("page", page);
//      Get notes data from context and add to model to show in view
        List<Notes> list = (List<Notes>) context.getAttribute("list");
        model.addAttribute("todos", list);
        return "homePage";
    }

    @RequestMapping("/add")
    public String add(Model model){
        Notes n = new Notes();
        model.addAttribute("notes", n);
        model.addAttribute("page", "add");
        return "homePage";
    }

    @RequestMapping(value = "/saveNotes", method=RequestMethod.POST)
    public String saveNotes(@ModelAttribute("notes") Notes x, Model model){
        System.out.println(x);
        x.setNoteDate(new Date());
        // Get Notes list from Context
        List<Notes> list = (List<Notes>)context.getAttribute("list");
        list.add(x);
        model.addAttribute("msg", "Successfully Added...");
        return "homePage";
    }
}