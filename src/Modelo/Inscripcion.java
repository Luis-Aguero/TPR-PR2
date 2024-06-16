package pr2.tp.backen.Modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Inscripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idInscripcion;            
    private int Año_Letivo ;
    private String Estado_Inscripcion;
    private Date Fech_Inscripcion;
    private int Monto_Matricula;
    private int Descuento;

    public Long getIdInscripcion() {
        return idInscripcion;
    }

    public void setIdInscripcion(Long idInscripcion) {
        this.idInscripcion = idInscripcion;
    }

    public int getAño_Letivo() {
        return Año_Letivo;
    }

    public void setAño_Letivo(int Año_Letivo) {
        this.Año_Letivo = Año_Letivo;
    }

    public String getEstado_Inscripcion() {
        return Estado_Inscripcion;
    }

    public void setEstado_Inscripcion(String Estado_Inscripcion) {
        this.Estado_Inscripcion = Estado_Inscripcion;
    }

    public Date getFech_Inscripcion() {
        return Fech_Inscripcion;
    }

    public void setFech_Inscripcion(Date Fech_Inscripcion) {
        this.Fech_Inscripcion = Fech_Inscripcion;
    }

    public int getMonto_Matricula() {
        return Monto_Matricula;
    }

    public void setMonto_Matricula(int Monto_Matricula) {
        this.Monto_Matricula = Monto_Matricula;
    }

    public int getDescuento() {
        return Descuento;
    }

    public void setDescuento(int Descuento) {
        this.Descuento = Descuento;
    }
    
   
}
