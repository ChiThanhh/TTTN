package com.example.example3.service.impl;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.example3.entity.Brand;
import com.example.example3.service.BrandService;
import com.example.example3.repository.BrandRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BrandServiceImpl implements BrandService {

    private BrandRepository brandRepository;

    @Override
    public Brand createBrand(Brand brand) {
        return brandRepository.save(brand);
    }

  @Override
    public Brand getBrandById(Long brandId) {
        Optional<Brand> optionalBrand = brandRepository.findById(brandId);
        return optionalBrand.get();
    }

    @Override
    public Page<Brand> getAllBrands(Pageable pageable) {
        return brandRepository.findAll(pageable);
    }

    @Override
    public Brand updateBrand(Brand brand) {
        Brand existingBrand = brandRepository.findById(brand.getId()).get();
        existingBrand.setName(brand.getName());
        existingBrand.setSlug(brand.getSlug());
        existingBrand.setImage(brand.getImage());
        existingBrand.setSortOrder(brand.getSortOrder());
        existingBrand.setMetakey(brand.getMetakey());
        existingBrand.setMetadesc(brand.getMetadesc());
        existingBrand.setCreatedAt(brand.getCreatedAt());
        existingBrand.setUpdatedAt(brand.getUpdatedAt());
        existingBrand.setCreatedBy(brand.getCreatedBy());
        existingBrand.setUpdatedBy(brand.getUpdatedBy());
        existingBrand.setStatus(brand.getStatus());
        Brand updatedCategory = brandRepository.save(existingBrand);
        return updatedCategory;
    }

    @Override
    public void deleteBrand(Long brandId) {
        brandRepository.deleteById(brandId);
    }
}
