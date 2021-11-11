package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.XmlResult;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
		
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습</h1><P>HTML 데이터</P>";   //통과하는 정도
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {                               //메세지컨버트의 진짜 컨버트하는거  
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이호이~");
		
		return XmlResult.success(vo);
	}
	
	
}
