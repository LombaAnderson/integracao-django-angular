# Generated by Django 4.1.1 on 2022-09-18 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='clients_profile'),
        ),
    ]
