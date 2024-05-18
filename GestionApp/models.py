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