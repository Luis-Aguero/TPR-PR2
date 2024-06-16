package pr2.tp.backen.Modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Alumno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Alumno;            
    private String Nomb_A;
    private String Apellido_A;
    private Date Fech_Nac;
    private String Direc_A;
    private String Nivel_A;
    private String Ciclo_A;
    private String Especializacion_A;
    private String Estado_A;

    public Long getId_Alumno() {
        return id_Alumno;
    }

    public void setId_Alumno(Long id_Alumno) {
        this.id_Alumno = id_Alumno;
    }

    public String getNomb_A() {
        return Nomb_A;
    }

    public void setNomb_A(String Nomb_A) {
        this.Nomb_A = Nomb_A;
    }

    public String getApellido_A() {
        return Apellido_A;
    }

    public void setApellido_A(String Apellido_A) {
        this.Apellido_A = Apellido_A;
    }

    public Date getFech_Nac() {
        return Fech_Nac;
    }

    public void setFech_Nac(Date Fech_Nac) {
        this.Fech_Nac = Fech_Nac;
    }

    public String getDirec_A() {
        return Direc_A;
    }

    public void setDirec_A(String Direc_A) {
        this.Direc_A = Direc_A;
    }

    public String getNivel_A() {
        return Nivel_A;
    }

    public void setNivel_A(String Nivel_A) {
        this.Nivel_A = Nivel_A;
    }

    public String getCiclo_A() {
        return Ciclo_A;
    }

    public void setCiclo_A(String Ciclo_A) {
        this.Ciclo_A = Ciclo_A;
    }

    public String getEspecializacion_A() {
        return Especializacion_A;
    }

    public void setEspecializacion_A(String Especializacion_A) {
        this.Especializacion_A = Especializacion_A;
    }

    public String getEstado_A() {
        return Estado_A;
    }

    public void setEstado_A(String Estado_A) {
        this.Estado_A = Estado_A;
    }
    
    

}
