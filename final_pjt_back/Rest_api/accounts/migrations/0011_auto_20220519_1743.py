# Generated by Django 3.2.12 on 2022-05-19 08:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_auto_20220519_1636'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='followings',
        ),
        migrations.RemoveField(
            model_name='user',
            name='profile_img',
        ),
    ]
