package com.exemplo.helloworld.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exemplo.helloworld.entity.Calculos;
import com.exemplo.helloworld.repository.CalculosRepository;

@Service
public class CalculosService {
    
    @Autowired
    private CalculosRepository calculosRepository;


    public List<Calculos> listAll(){
        return calculosRepository.findAll();
    }

    public Calculos save(Calculos calculos){
        return calculosRepository.saveAndFlush(calculos);
    }

    public Calculos update(Calculos calculos) {
        return calculosRepository.saveAndFlush(calculos);
    }

    public void delete(Long id){
        Calculos calculos = calculosRepository.findById(id).get();
        calculosRepository.delete(calculos);
    }

}
