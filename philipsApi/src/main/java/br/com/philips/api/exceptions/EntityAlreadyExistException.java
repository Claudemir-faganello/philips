package br.com.philips.api.exceptions;

public class EntityAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private String msg;

	public EntityAlreadyExistException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
