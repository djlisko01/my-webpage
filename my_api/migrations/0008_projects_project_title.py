# Generated by Django 4.0.4 on 2022-06-06 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_api', '0007_rename_prj_img_projects_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='project_title',
            field=models.CharField(default='Fix Me Later', max_length=100),
            preserve_default=False,
        ),
    ]
