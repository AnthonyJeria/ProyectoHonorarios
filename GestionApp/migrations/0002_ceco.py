# Generated by Django 3.2 on 2024-05-15 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GestionApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CeCo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_CeCo', models.IntegerField()),
                ('num_CeCo', models.IntegerField()),
                ('nombre_CeCo', models.IntegerField()),
                ('anno_contable', models.IntegerField()),
            ],
        ),
    ]
