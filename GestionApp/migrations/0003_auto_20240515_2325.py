# Generated by Django 3.2 on 2024-05-16 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('GestionApp', '0002_ceco'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ceco',
            name='id_CeCo',
        ),
        migrations.RemoveField(
            model_name='tipo_usuario',
            name='id_tipo_usuario',
        ),
    ]
