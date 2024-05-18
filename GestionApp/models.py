from django.db import models

class Tipo_usuario(models.Model):
    nombre_tipo_usuario = models.CharField(max_length=40)

class Usuario(models.Model):
    rut = models.IntegerField()
    DV = models.CharField(max_length=1)
    nombre = models.CharField(max_length=40)
    apellido1 = models.CharField(max_length=40)
    apellido2 = models.CharField(max_length=40)
    nombre_usuario = models.CharField(max_length=40)
    correo = models.CharField(max_length=50)
    clave = models.CharField(max_length=50)
    id_tipo_usuario = models.IntegerField()

class CeCo(models.Model):
    num_CeCo = models.IntegerField()
    nombre_CeCo = models.IntegerField()
    anno_contable = models.IntegerField()

class escuela(models.Model):
    id_escuela = models.CharField(max_length=20)
    nombre_escuela = models.CharField(max_length=50)

class prestadorServicios(models.Model):
    rut = models.IntegerField()
    DV = models.CharField(max_length=1)
    nombre = models.CharField(max_length=40)
    apellido1 = models.CharField(max_length=40)
    apellido2 = models.CharField(max_length=40)
    correo = models.CharField(max_length=50)
    id_banco = models.IntegerField()
    tipo_cuenta = models.CharField(max_length=30)
    numero_cuenta = models.IntegerField()

class banco(models.Model):
    nombre_banco = models.CharField(max_length=50)

class documento(models.Model):
    id_documento = models.CharField(max_length=100)
    rut_prestador = models.CharField(max_length=10)
    num_boleta = models.IntegerField()
    fecha_boleta = models.DateField()
    monto_bruto = models.IntegerField()
    detalle_boleta = models.CharField(max_length=500)
    detalle_analista = models.CharField(max_length=500)
    CeCo = models.IntegerField()
    escuela = models.IntegerField()


