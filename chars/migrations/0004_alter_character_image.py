# Generated by Django 3.2.4 on 2022-03-10 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chars', '0003_alter_character_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='image',
            field=models.ImageField(upload_to='uploads/'),
        ),
    ]