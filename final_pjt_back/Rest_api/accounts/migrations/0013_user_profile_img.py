# Generated by Django 3.2.12 on 2022-05-22 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_user_followings'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_img',
            field=models.TextField(blank=True),
        ),
    ]