package net.projectbe.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long prodId;
	
	@Column(name = "prod_name")
	private String prodName;

	@Column(name = "unit_cost")
	private String unitCost;
	
	@Column(name = "email_id")
	private String emailId;
	
	public Product() {
		
	}
	
	public Product(String prodName, String unitCost, String emailId) {
		super();
		this.prodName = prodName;
		this.unitCost = unitCost;
	}
	public long getId() {
		return prodId;
	}
	public void setId(long prodId) {
		this.prodId = prodId;
	}
	public String getProdName() {
		return prodName;
	}
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	public String getUnitCost() {
		return unitCost;
	}
	public void setUnitCost(String unitCost) {
		this.unitCost = unitCost;
	}
}