# Generated by Django 2.2.4 on 2019-08-23 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0010_userreactions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userreactions',
            name='reaction',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='userreactions',
            name='token',
            field=models.CharField(max_length=255),
        ),
    ]
