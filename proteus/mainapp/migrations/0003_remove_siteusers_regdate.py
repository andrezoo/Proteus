# Generated by Django 2.2.4 on 2019-08-17 07:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_auto_20190817_1233'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='siteusers',
            name='regDate',
        ),
    ]
