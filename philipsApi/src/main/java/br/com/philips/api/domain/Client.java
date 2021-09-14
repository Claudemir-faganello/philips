package br.com.philips.api.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull(message = "Nome é obrigatório")
	private String fullName;
	@NotNull(message = "Cpf é obrigatório")
	private String cpf;
	@NotNull(message = "Nascimento é obrigatório")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate birth;

	@NotNull(message = "Endereço é obrigatório")
	@NotEmpty(message = "Informe pelo menos um endereço")
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	private List<Endereco> endereco = new ArrayList<>();
}
