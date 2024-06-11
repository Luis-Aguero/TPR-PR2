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
    private String Nomb_Contacto;
    private String Apellido_Contacto;
    private String Tipo_Relacion;
    private String Telef_Contacto;
    private String Direc_Contacto;
    private Boolean encargado;

    public Long getId_contacto() {
        return id_contacto;
    }

    public void setId_contacto(Long id_contacto) {
        this.id_contacto = id_contacto;
    }

    public String getNomb_Contacto() {
        return Nomb_Contacto;
    }

    public void setNomb_Contacto(String Nomb_Contacto) {
        this.Nomb_Contacto = Nomb_Contacto;
    }

    public String getApellido_Contacto() {
        return Apellido_Contacto;
    }

    public void setApellido_Contacto(String Apellido_Contacto) {
        this.Apellido_Contacto = Apellido_Contacto;
    }

    public String getTipo_Relacion() {
        return Tipo_Relacion;
    }

    public void setTipo_Relacion(String Tipo_Relacion) {
        this.Tipo_Relacion = Tipo_Relacion;
    }

    public String getTelef_Contacto() {
        return Telef_Contacto;
    }

    public void setTelef_Contacto(String Telef_Contacto) {
        this.Telef_Contacto = Telef_Contacto;
    }

    public String getDirec_Contacto() {
        return Direc_Contacto;
    }

    public void setDirec_Contacto(String Direc_Contacto) {
        this.Direc_Contacto = Direc_Contacto;
    }

    public Boolean getEncargado() {
        return encargado;
    }

    public void setEncargado(Boolean encargado) {
        this.encargado = encargado;
    }
  
 

  
}
