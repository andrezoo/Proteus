# Generated by Django 2.2.4 on 2019-08-18 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0004_auto_20190818_1258'),
    ]

    operations = [
        migrations.AddField(
            model_name='rssposts',
            name='dislikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='rssposts',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='rssposts',
            name='views',
            field=models.IntegerField(default=0),
        ),
    ]
