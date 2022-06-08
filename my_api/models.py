from tkinter import N
from tokenize import blank_re
from django.db import models

# Create your models here.
class Resume(models.Model):
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  job_title = models.CharField(max_length=100)
  description = models.TextField(blank=True)
  company_link = models.URLField(blank=True)
  # company_name = models.CharField(max_length=100)

  class Meta:
    ordering = ("-start_date",)

class Projects(models.Model):
  project_title = models.CharField(max_length=100)
  brief_description = models.TextField(blank=True, null=True)
  git_url = models.URLField(blank=True, null=True)
  project_image = models.ImageField(blank=True, null=True, upload_to="post_images")