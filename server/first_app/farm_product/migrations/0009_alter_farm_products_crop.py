# Generated by Django 4.2.6 on 2023-11-07 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("farm_product", "0008_remove_farm_products_unit_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="farm_products",
            name="crop",
            field=models.FloatField(default=0.0),
        ),
    ]