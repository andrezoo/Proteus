# Generated by Django 2.2.4 on 2019-08-23 04:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0012_auto_20190823_0959'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userreactions',
            old_name='postToken',
            new_name='posttoken',
        ),
    ]
