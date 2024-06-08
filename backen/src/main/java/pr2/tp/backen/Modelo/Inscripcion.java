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
    private int ano_Letivo ;
    private String estado_Inscripcion;
    private Date fech_Inscripcion;
    private int monto_Matricula;
    private int descuento;
    private Long id_Alumno;
    private Long idCurso;
    
    public Long getIdInscripcion() {
        return idInscripcion;
    }

    public void setIdInscripcion(Long idInscripcion) {
        this.idInscripcion = idInscripcion;
    }

    public int getAno_Letivo() {
        return ano_Letivo;
    }

    public void setAno_Letivo(int ano_Letivo) {
        this.ano_Letivo = ano_Letivo;
    }

    public String getEstado_Inscripcion() {
        return estado_Inscripcion;
    }

    public void setEstado_Inscripcion(String estado_Inscripcion) {
        this.estado_Inscripcion = estado_Inscripcion;
    }

    public Date getFech_Inscripcion() {
        return fech_Inscripcion;
    }

    public void setFech_Inscripcion(Date fech_Inscripcion) {
        this.fech_Inscripcion = fech_Inscripcion;
    }

    public int getMonto_Matricula() {
        return monto_Matricula;
    }

    public void setMonto_Matricula(int monto_Matricula) {
        this.monto_Matricula = monto_Matricula;
    }

    public int getDescuento() {
        return descuento;
    }

    public void setDescuento(int descuento) {
        this.descuento = descuento;
    }

    public Long getId_Alumno() {
        return id_Alumno;
    }

    public void setId_Alumno(Long id_Alumno) {
        this.id_Alumno = id_Alumno;
    }

    public Long getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(Long idCurso) {
        this.idCurso = idCurso;
    }
        
    
}
