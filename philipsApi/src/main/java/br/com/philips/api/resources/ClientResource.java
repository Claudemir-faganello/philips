package br.com.philips.api.resources;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.philips.api.domain.Client;
import br.com.philips.api.service.ClientService;

@RestController
@RequestMapping("/clients")
@CrossOrigin
public class ClientResource {

	@Autowired
	private ClientService clientService;

	@PostMapping
	@ResponseStatus(value = HttpStatus.CREATED)
	public ResponseEntity<?> save(@RequestBody @Valid Client client) {
		return ResponseEntity.ok(this.clientService.save(client));
	}

	@GetMapping
	public ResponseEntity<?> list(@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "10000") Integer size) {
		return ResponseEntity.ok(this.clientService.listAll(page, size));
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@RequestParam(required = true) Long id) {
		return ResponseEntity.ok(this.clientService.findById(id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteById(@RequestParam(required = true) Long id) {
		this.clientService.delete(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	@PutMapping("/{id}")
	@ResponseStatus(value = HttpStatus.CREATED)
	public ResponseEntity<?> save(@RequestBody @Valid Client client, @PathVariable Long id) {
		return ResponseEntity.ok(this.clientService.update(client, id));
	}

}
