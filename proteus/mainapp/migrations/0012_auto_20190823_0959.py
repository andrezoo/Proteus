# Generated by Django 2.2.4 on 2019-08-23 03:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0011_auto_20190823_0959'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userreactions',
            old_name='token',
            new_name='postToken',
        ),
    ]
