package net.projectbe.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.projectbe.springboot.exception.ResourceNotFoundException;
import net.projectbe.springboot.model.Product;
import net.projectbe.springboot.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	
	// get all products
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}		
	
	// create product rest api
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}
	
	// get product by prodId rest api
	@GetMapping("/products/{prodId}")
	public ResponseEntity<Product> getProductByProdId(@PathVariable Long prodId) {
		Product product = productRepository.findById(prodId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with prodId :" + prodId));
		return ResponseEntity.ok(product);
	}
	
	// update product rest api
	
	@PutMapping("/products/{prodId}")
	public ResponseEntity<Product> updateProduct(@PathVariable Long prodId, @RequestBody Product productDetails){
		Product product = productRepository.findById(prodId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with prodId :" + prodId));
		
		product.setProdName(productDetails.getProdName());
		product.setUnitCost(productDetails.getUnitCost());
		
		Product updatedProduct = productRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}
	
	// delete product rest api
	@DeleteMapping("/products/{prodId}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long prodId){
		Product product = productRepository.findById(prodId)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with prodId :" + prodId));
		
		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}