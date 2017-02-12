"""create initial tables

Revision ID: e8d0b1f54f4e
Revises:
Create Date: 2017-01-24 20:54:23.416219

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e8d0b1f54f4e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.Unicode(128)),
    )

    op.create_table(
        'products',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.Unicode(128), nullable=False),
        sa.Column(
            'user_id',
            sa.Integer,
            sa.ForeignKey('users.id'),
            nullable=False
        ),
    )


def downgrade():
    op.drop_table('products')
    op.drop_table('users')
