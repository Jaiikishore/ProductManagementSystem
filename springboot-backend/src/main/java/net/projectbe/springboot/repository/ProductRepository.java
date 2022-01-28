package net.projectbe.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.projectbe.springboot.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}