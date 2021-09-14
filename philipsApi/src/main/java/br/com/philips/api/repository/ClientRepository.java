package br.com.philips.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.philips.api.domain.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

	Optional<Client> findByCpf(String cpf);

}
