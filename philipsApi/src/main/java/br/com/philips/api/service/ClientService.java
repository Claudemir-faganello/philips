package br.com.philips.api.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.philips.api.domain.Client;
import br.com.philips.api.exceptions.EntityAlreadyExistException;
import br.com.philips.api.exceptions.EtityNotFoundException;
import br.com.philips.api.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository clientRepository;

	public Page<Client> listAll(Integer page, Integer size) {
		PageRequest pageRequest = PageRequest.of(page, size);
		return this.clientRepository.findAll(pageRequest);
	}

	public Client save(Client client) {
		Optional<Client> clientPrevious = this.findByCpf(client.getCpf());
		if (clientPrevious.isPresent()) {
			throw new EntityAlreadyExistException("Cliente de cpf: " + client.getCpf() + " já cadastrado!");
		}
		return this.clientRepository.save(client);
	}

	public Client findById(Long id) {
		Optional<Client> client = this.clientRepository.findById(id);
		if (!client.isPresent()) {
			throw new EtityNotFoundException("Cliente de id: " + id + " não encontrado!");
		}
		return client.get();
	}

	public Optional<Client> findByCpf(String cpf) {
		return this.clientRepository.findByCpf(cpf);
	}

	public void delete(Long id) {
		Client client = this.findById(id);
		this.clientRepository.deleteById(client.getId());
	}

	public Client update(Client client, Long id) {
		Client clientPrevious = this.findById(id);
		BeanUtils.copyProperties(client, clientPrevious, "id");
		return this.clientRepository.save(client);
	}
}
