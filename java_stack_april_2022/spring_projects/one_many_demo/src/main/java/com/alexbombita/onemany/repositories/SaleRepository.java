package com.alexbombita.onemany.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alexbombita.onemany.models.Sale;

@Repository
public interface SaleRepository extends CrudRepository<Sale,Long> {
	List<Sale> findAll();
}
