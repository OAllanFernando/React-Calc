package com.exemplo.helloworld.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "calculos")
public class Calculos {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "operacao")
    private Operacao operacao;

    @Column(name = "valor1")
    private Double valor1;

    @Column(name = "valor2")
    private Double valor2;

    


    
}
