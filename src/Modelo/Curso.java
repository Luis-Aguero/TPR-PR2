package pr2.tp.backen.Modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCurso;            
    private String Nivel;
    private String Ciclo;
    private Date Fech_Nac;
    private String Especializacion;
    private String Estado_C;
    private String Periodo;
    private int Arancel;

    public Long getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Long idCurso) {
        this.idCurso = idCurso;
    }

    public String getNivel() {
        return Nivel;
    }

    public void setNivel(String Nivel) {
        this.Nivel = Nivel;
    }

    public String getCiclo() {
        return Ciclo;
    }

    public void setCiclo(String Ciclo) {
        this.Ciclo = Ciclo;
    }

    public Date getFech_Nac() {
        return Fech_Nac;
    }

    public void setFech_Nac(Date Fech_Nac) {
        this.Fech_Nac = Fech_Nac;
    }

    public String getEspecializacion() {
        return Especializacion;
    }

    public void setEspecializacion(String Especializacion) {
        this.Especializacion = Especializacion;
    }

    public String getEstado_C() {
        return Estado_C;
    }

    public void setEstado_C(String Estado_C) {
        this.Estado_C = Estado_C;
    }

    public String getPeriodo() {
        return Periodo;
    }

    public void setPeriodo(String Periodo) {
        this.Periodo = Periodo;
    }

    public int getArancel() {
        return Arancel;
    }

    public void setArancel(int Arancel) {
        this.Arancel = Arancel;
    }
    

   
}
