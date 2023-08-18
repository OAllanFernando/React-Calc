package com.exemplo.helloworld.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exemplo.helloworld.entity.Calculos;

import com.exemplo.helloworld.service.CalculosService;



@RestController
@RequestMapping("/calculos")
@CrossOrigin
public class CalculosController {
    
    @Autowired
    private CalculosService calculosService;


    // localhost:8080/calculoss - com o verbo get
    @GetMapping
    public List<Calculos> listAll(){
        return calculosService.listAll();
    }

    // localhost:8080/calculoss - com verbo post
    @PostMapping
    public Calculos save(@RequestBody Calculos calculos){
        return calculosService.save(calculos);
    }

    //localhost:8080/calculoss/1 - com o verbo delete
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        calculosService.delete(id);
    }
}
