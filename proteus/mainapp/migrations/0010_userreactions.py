# Generated by Django 2.2.4 on 2019-08-23 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0009_auto_20190819_1656'),
    ]

    operations = [
        migrations.CreateModel(
            name='userReactions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.CharField(max_length=100)),
                ('reaction', models.IntegerField()),
                ('token', models.TextField()),
            ],
        ),
    ]
