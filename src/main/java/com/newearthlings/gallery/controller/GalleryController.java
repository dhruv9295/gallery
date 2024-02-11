package com.newearthlings.gallery.controller;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GalleryController {

	@GetMapping("getForm")
    public String getForm() {
        return "employeeFrom";
    }

    @PostMapping("/saveDetails")                     // it only support port method
    public String saveDetails(@RequestParam("employeeName") String employeeName,
                              @RequestParam("employeeEmail") String employeeEmail,
                              ModelMap modelMap) {

        // write your code to save details
        modelMap.put("employeeName", employeeName);
        modelMap.put("employeeEmail", employeeEmail);
        return "viewDetails";           // welcome is view name. It will call employeeFrom.jsp
    }
    
    @GetMapping("myGallery")
    public String openGallery() {
    return "gallery";
    }
    
    @RequestMapping(value = "/image", method = RequestMethod.GET,produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(HttpServletResponse response) throws IOException {
        var imgFile = new ClassPathResource("image/wallpaper.jpeg");
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
    }
    
    @PostMapping("image2") 
    public String postImage(@RequestParam("imageName") String imageName,
    		@RequestParam("crudFlag") String crudFlag,
    		ModelMap modelMap) throws IOException {
    	
    	System.out.println("image2 post");
    	
        String absolutePath = "G:\\Phone files\\Album1\\";
        
        String path = "G:\\Phone files\\Album1\\image\\";
        //File file = new File(path2);
        //String absolutePath = file.getAbsolutePath();
        System.out.println(absolutePath);
        
        if("M".equals(crudFlag)&& !"".equals(imageName)) {
        Files.move
     	        (Paths.get(absolutePath+"\\image\\"+imageName), 
     	        Paths.get(absolutePath+"\\delete\\"+imageName));
        }
        
        if("F".equals(crudFlag)&& !"".equals(imageName)) {
         Files.move
     	        (Paths.get(absolutePath+"\\image\\"+imageName), 
     	        Paths.get(absolutePath+"\\favourite\\"+imageName));
        }
        
        //Creating a File object for directory
        File directoryPath = new File(absolutePath+"\\image");
        //List of all files and directories
        String contents[] = directoryPath.list();
        //System.out.println("imageName-"+imageName);
        
       if(1<contents.length) {
        	for(int i=0; i<1; i++) { //for(int i=0; i<contents.length; i++) {
           System.out.println(contents[i]);
           byte[] imageBytes = Files.readAllBytes(Path.of(path+contents[i]));
           byte[] imageBytes2 = Files.readAllBytes(Path.of(path+contents[i+1]));

           String base64Image = Base64.getEncoder().encodeToString(imageBytes);
           String base64Image2 = Base64.getEncoder().encodeToString(imageBytes2);
           
           modelMap.put("image", base64Image);
           modelMap.put("image1", base64Image2);
           modelMap.put("imageName", contents[i]);
           modelMap.put("contentslength", contents.length);
           }
       }
         return "image2";
    }
    
    
    @GetMapping("image2")
    public String postImage(ModelMap modelMap) throws IOException {
    	System.out.println("image2 get");
    	
       // String path = "/image/";
       // String path2 = "src/main/resources/static";
        String absolutePath = "G:\\Phone files\\Album1\\";
        
        String path = "G:\\Phone files\\Album1\\image\\";
       // File file = new File(path2);
        //String absolutePath = file.getAbsolutePath();//System.out.println(absolutePath);

        //Creating a File object for directory
        File directoryPath = new File(absolutePath+"\\image");
        //List of all files and directories
        String contents[] = directoryPath.list();
        
        	for(int i=0; i<1; i++) { //for(int i=0; i<contents.length; i++) {
           System.out.println(contents[i]);
           byte[] imageBytes = Files.readAllBytes(Path.of(path+contents[i]));
           byte[] imageBytes2 = Files.readAllBytes(Path.of(path+contents[i+1]));

           String base64Image = Base64.getEncoder().encodeToString(imageBytes);
           String base64Image2 = Base64.getEncoder().encodeToString(imageBytes2);
           
           modelMap.put("image", base64Image);
           modelMap.put("image1", base64Image2);

        }
         return "image2";
    }
    
    
    @PostMapping("video2") 
    public String postVideo(@RequestParam("imageName") int imageName,
    		@RequestParam("crudFlag") String crudFlag,
    		ModelMap modelMap) throws IOException {
    	System.out.println("video2 post");
        String path = "/image/";
        
        String path2 = "src/main/resources/static";
        File file = new File(path2);
        String absolutePath = file.getAbsolutePath();//System.out.println(absolutePath);
        //Creating a File object for directory
        File directoryPath = new File(absolutePath+"\\image");
        //List of all files and directories
        String contents[] = directoryPath.list();
        //System.out.println("imageName-"+imageName);
        int i=1;
        if(1<contents.length) {
        if("M".equals(crudFlag)&& !"".equals(imageName)) {
        	i=imageName-1;
        	if(i<0) {i=contents.length-1;}
        }
        
        if("F".equals(crudFlag)&& !"".equals(imageName)) {
        	i=imageName+1;
        	if(i>contents.length) {i=1;}
        }
           System.out.println(contents[i]);
           modelMap.put("image", path+contents[i]);
           modelMap.put("imageName",i);
           modelMap.put("contentslength", contents.length);
       }
         return "video2";
    }
    
    @GetMapping("video2")
    public String postVideo(ModelMap modelMap) throws IOException {
    	System.out.println("video2 get");
        String path = "/image/";
        String path2 = "src/main/resources/static";
        File file = new File(path2);
        String absolutePath = file.getAbsolutePath();//System.out.println(absolutePath);
        
        //Creating a File object for directory
        File directoryPath = new File(absolutePath+"\\image");
        //List of all files and directories
        String contents[] = directoryPath.list();
        
        	for(int i=0; i<1; i++) { //for(int i=0; i<contents.length; i++) {
           System.out.println(contents[i]);
           modelMap.put("image", path+contents[i]);
           modelMap.put("imageName", i);

        }
         return "video2";
    }
    
    public void writeFile(String value){
    	System.out.println("writefile");
        String PATH = "";
        String fileName = "abcd"+ ".txt";


        File file = new File(fileName);
        try{
            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(value);
            bw.close();
        }
        catch (IOException e){
            e.printStackTrace();
            System.exit(-1);
        }
    }
}
