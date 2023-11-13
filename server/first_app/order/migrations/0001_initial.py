# Generated by Django 4.2.6 on 2023-11-10 11:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("product", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Order",
            fields=[
                ("order_number", models.AutoField(primary_key=True, serialize=False)),
                ("nickname", models.CharField(max_length=45)),
                ("order_date", models.DateTimeField(auto_now_add=True)),
                ("status", models.IntegerField(default=0)),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="product.product",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nickname", models.CharField(max_length=45)),
                ("content", models.TextField()),
                ("photo", models.CharField(max_length=255)),
                ("score", models.IntegerField()),
                ("kind", models.IntegerField()),
                ("regdate", models.DateTimeField(auto_now_add=True)),
                (
                    "order",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="order.order"
                    ),
                ),
            ],
        ),
    ]
