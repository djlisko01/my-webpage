# Generated by Django 4.0.4 on 2022-06-06 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_api', '0010_alter_projects_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='project_image',
            field=models.ImageField(blank=True, null=True, upload_to='./media/images'),
        ),
    ]
