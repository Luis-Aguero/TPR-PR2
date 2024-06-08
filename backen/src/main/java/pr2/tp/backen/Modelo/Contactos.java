package pr2.tp.backen.Modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Contactos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_contacto;            
    private String nomb_Contacto;
    private String apellido_Contacto;
    private String tipo_Relacion;
    private String telef_Contacto;
    private String direc_Contacto;
    private Boolean encargado;

    public Long getId_contacto() {
        return id_contacto;
    }

    public void setId_contacto(Long id_contacto) {
        this.id_contacto = id_contacto;
    }

    public String getNomb_Contacto() {
        return nomb_Contacto;
    }

    public void setNomb_Contacto(String nomb_Contacto) {
        this.nomb_Contacto = nomb_Contacto;
    }

    public String getApellido_Contacto() {
        return apellido_Contacto;
    }

    public void setApellido_Contacto(String apellido_Contacto) {
        this.apellido_Contacto = apellido_Contacto;
    }

    public String getTipo_Relacion() {
        return tipo_Relacion;
    }

    public void setTipo_Relacion(String tipo_Relacion) {
        this.tipo_Relacion = tipo_Relacion;
    }

    public String getTelef_Contacto() {
        return telef_Contacto;
    }

    public void setTelef_Contacto(String telef_Contacto) {
        this.telef_Contacto = telef_Contacto;
    }

    public String getDirec_Contacto() {
        return direc_Contacto;
    }

    public void setDirec_Contacto(String direc_Contacto) {
        this.direc_Contacto = direc_Contacto;
    }

    public Boolean getEncargado() {
        return encargado;
    }

    public void setEncargado(Boolean encargado) {
        this.encargado = encargado;
    }
 
  
 

  
}
