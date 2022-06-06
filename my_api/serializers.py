from dataclasses import fields
from rest_framework import serializers
from .models import Resume, Projects

class ResumeSerializer(serializers.ModelSerializer):
 class Meta:
   model = Resume
   fields = ["start_date", "end_date", "job_title", "description", "company_link"]
  

class ProjectsSerializer(serializers.ModelSerializer):
 class Meta:
   model = Projects
   fields = ["brief_description", "git_url", "project_image"]