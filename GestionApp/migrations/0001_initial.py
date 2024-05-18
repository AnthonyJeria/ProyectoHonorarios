# Generated by Django 3.2 on 2024-05-12 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tipo_usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_tipo_usuario', models.IntegerField()),
                ('nombre_tipo_usuario', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rut', models.IntegerField()),
                ('DV', models.CharField(max_length=1)),
                ('nombre', models.CharField(max_length=40)),
                ('apellido1', models.CharField(max_length=40)),
                ('apellido2', models.CharField(max_length=40)),
                ('nombre_usuario', models.CharField(max_length=40)),
                ('correo', models.CharField(max_length=50)),
                ('clave', models.CharField(max_length=50)),
                ('id_tipo_usuario', models.IntegerField()),
            ],
        ),
    ]